import { pdfjs, Document, Page } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';
import type { PDFDocumentProxy } from 'pdfjs-dist';
import { useState } from 'react';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    'pdfjs-dist/build/pdf.worker.min.mjs',
    import.meta.url,
  ).toString();


export default function MyPdf({fileUrl} : {fileUrl:string}){
    const [numPages, setNumPages] = useState<number>(); // set total number of pages on the pdf
    const [pageNumber, setPageNumber] = useState<number>(); // set the current page number used to passs it in
    
    function onDocumentLoadSuccess({ numPages: nextNumPages }: PDFDocumentProxy): void {
        setNumPages(nextNumPages);
    }

    
    return (
        <div className = "flex flex-row px-5 justify-center">
             <Document className= "items-center" file={fileUrl} onLoadSuccess={onDocumentLoadSuccess}>
                {Array.apply(null, Array(numPages))
                .map((x, i) => i + 1)
                .map((page) => {
                    return (
                    <Page className={"mb-10"}
                        pageNumber={page}
                        renderTextLayer={false}
                        renderAnnotationLayer={false}
                    />
                    );
                })}
            </Document>
        </div>
    )
}