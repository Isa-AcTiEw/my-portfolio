import { pdfjs, Document, Page } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';
import type { PDFDocumentProxy } from 'pdfjs-dist';
import { useState,useEffect} from 'react';
import { Button } from "@/components/ui/button"
import { ChevronLeft } from "lucide-react"
import { ChevronRight } from "lucide-react"
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    'pdfjs-dist/build/pdf.worker.min.mjs',
    import.meta.url,
  ).toString();


export default function MyPdf({fileUrl} : {fileUrl:string}){
    const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth); // Track window width
    const [pageWidth, setPageWidth] = useState<number>(800); // Default page width
    const [numPages, setNumPages] = useState<number | null>(null); // set total number of pages on the pdf
    const [pageNumber, setPageNumber] = useState<number>(1); // set the current page number used to passs it in
    

    function onDocumentLoadSuccess({ numPages: nextNumPages }: PDFDocumentProxy): void {
        setNumPages(nextNumPages);
        setPageNumber(0);
    }

    

    function onNextClicked() {
        if (numPages && pageNumber < numPages-1) {
            setPageNumber((prev) => prev + 1);
        }
    }

    function onPrevClicked() {
        if(numPages && pageNumber != 0){
            setPageNumber((prev)=> prev -1)
        }
    }

    useEffect(() => {
        // updates the window width 
        const handleResize = () => {
          setWindowWidth(window.innerWidth); // Update width on resize
        };
    
        window.addEventListener('resize', handleResize);
    
        // Clean up the event listener on component unmount
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);
    
      // UseEffect block that sets the new page width on the dependency windowWidth, whenever the window is resize the new page width set
      useEffect(() => {
        if (windowWidth >= 1024) {
          setPageWidth(800); // Large screens (lg)
        } else if (windowWidth >= 768) {
          setPageWidth(600); // Medium screens (md)
        }
        else if (windowWidth >= 600){
            setPageWidth(500);
        }
        else if (windowWidth >= 430){
            setPageWidth(350);
        }
        else{
            setPageWidth(320);
        }
      }, [windowWidth]);

      
    

    
    return (
        <div className='w-fit h-fit mx-auto'>
            <Document className= "items-center relative mb-5" file={fileUrl} onLoadSuccess={onDocumentLoadSuccess}>
                <Page pageIndex={pageNumber} renderTextLayer = {false} renderAnnotationLayer = {false}
                width={pageWidth}></Page>
            </Document>
             <div className = "flex flex-row px-5 justify-center rounded-sm relative mx-auto">
                <p>Page {pageNumber +1} of {numPages} </p>
                <Button className = "absolute left-0" variant="outline" size="icon" onClick={onPrevClicked}>
                    <ChevronLeft />
                </Button>
                <Button className = "absolute right-0" variant="outline" size="icon" onClick={onNextClicked}>
                    <ChevronRight/>
                </Button>
             </div>
        </div>
        
    )
}