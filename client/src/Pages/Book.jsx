import React, { useEffect, useState } from "react";
import axios from "axios";
import * as pdfjsLib from "pdfjs-dist";

// Set the workerSrc globally for pdfjsLib to use the same version
pdfjsLib.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js`;

const Book = () => {
  const [pdfs, setPdfs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [pdfPreviews, setPdfPreviews] = useState({});

  useEffect(() => {
    // Fetch the PDF files from the API
    const fetchPdfs = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/pdfs"); // Replace with your API endpoint
        setPdfs(response.data.pdfs || []);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching PDFs:", error);
        setLoading(false);
      }
    };

    fetchPdfs();
  }, []);

  // Function to render the first page of a PDF as an image
  const renderPdfPreview = (pdfUrl) => {
    return new Promise((resolve, reject) => {
      const canvas = document.createElement("canvas");
      const context = canvas.getContext("2d");

      pdfjsLib.getDocument(pdfUrl).promise.then((pdf) => {
        pdf.getPage(1).then((page) => {
          const scale = 0.5;
          const viewport = page.getViewport({ scale });

          canvas.width = viewport.width;
          canvas.height = viewport.height;

          page.render({
            canvasContext: context,
            viewport: viewport,
          }).promise.then(() => {
            const imgData = canvas.toDataURL();
            resolve(imgData);
          }).catch((renderError) => {
            console.error("Error rendering PDF page:", renderError);
            reject(renderError);
          });
        }).catch((pageError) => {
          console.error("Error getting PDF page:", pageError);
          reject(pageError);
        });
      }).catch((docError) => {
        console.error("Error loading PDF document:", docError);
        reject(docError);
      });
    });
  };

  const fetchPreviews = async () => {
    const previews = {};
    for (const pdf of pdfs) {
      try {
        const previewImage = await renderPdfPreview(`http://localhost:3000${pdf}`);
        previews[pdf] = previewImage;
      } catch (error) {
        console.error("Error generating PDF preview:", error);
        previews[pdf] = "";
      }
    }
    setPdfPreviews(previews);
  };

  useEffect(() => {
    if (pdfs.length > 0) {
      fetchPreviews();
    }
  }, [pdfs]);

  if (loading) {
    return <div className="text-center mt-5 text-lg font-medium">Loading PDFs...</div>;
  }

  return (
    <div className="p-5">
      <h1 className="text-2xl font-bold mb-4">Books on Mental Health</h1>
      {pdfs.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {pdfs.map((pdf, index) => (
            <div key={index} className="p-4 bg-gray-100 border border-gray-200 rounded-md shadow-sm hover:shadow-md">

              <div className="mb-2">
                {pdfPreviews[pdf] ? (
                  <img src={pdfPreviews[pdf]} alt="PDF preview" className="w-full h-auto object-cover" />
                ) : (
                  <div>Loading preview...</div>
                )}
              </div>
              <h2 className="text-lg font-medium truncate">
                {pdf.split("/").pop().replace(".pdf", "")}
              </h2>
              <div className="flex flex-row items-center gap-3">
                <a
                  href={`http://localhost:3000${pdf}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 underline mt-2 block"
                >
                  View PDF
                </a>
                <span className="text-gray-500">|</span>
                <a
                  href={`http://localhost:3000${pdf}`}
                  download
                  className="text-green-500 underline mt-2 block"
                >
                  Download PDF
                </a>
              </div>

            </div>
          ))}
        </div>
      ) : (
        <div className="text-center text-gray-500 text-lg mt-5">No PDFs available</div>
      )}
    </div>
  );
};

export default Book;
