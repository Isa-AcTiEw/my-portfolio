import { Card, CardContent, CardHeader } from "./card";
import { Carousel, CarouselItem, CarouselContent, CarouselNext, CarouselPrevious } from "./carousel";
import { Button } from "./button";
import Autoplay from 'embla-carousel-autoplay';

type ModalContent = {
    header: string;
    body: string;
    images: string[] | string;
    onClose: ()=> void
};

export default function MyModal({ header, body, images,onClose }: ModalContent) {
    return (
        <div className="fixed inset-0 z-50 flex flex-col justify-center items-center bg-black bg-opacity-50 backdrop-blur-md w-full h-full p-4">
            {/* The card content */}
            <Card className="w-[350px] text-[15px] sm:w-[650px] sm:text-[18px] shadow-lg rounded-lg px-4"
                style={{
                    backgroundColor: 'hsl(var(--card))',
                    color: 'hsl(var(--card-foreground))',
                }}>
                <CardHeader>{header}</CardHeader>
                <CardContent className="flex flex-col rounded-sm w-full h-full items-center">
                    {Array.isArray(images) && images.length > 0 ? (
                        <Carousel className="relative w-full" plugins={[Autoplay({ delay: 3000 })]}>
                            <CarouselContent>
                                {images.map((imgSrc, index) => {
                                    console.log('Rendering image:', imgSrc);  // Logs the current image source
                                    return (
                                        <CarouselItem key={index}>
                                            <div className="p-1">
                                                <Card>
                                                    <CardContent className="flex items-center justify-center p-0">
                                                        <div className="w-full aspect-video">
                                                            <img
                                                                src={imgSrc}
                                                                alt={`Image ${index}`}
                                                                className="w-full h-full object-cover rounded-sm"
                                                            />
                                                        </div>
                                                    </CardContent>
                                                </Card>
                                            </div>
                                        </CarouselItem>
                                    );
                                })}
                            </CarouselContent>
                            <CarouselPrevious className="left-2" />
                            <CarouselNext className="right-2" />
                        </Carousel>
                    ) : (
                        <div>
                            <p>No images available</p>
                        </div>
                    )}
    
                    <div className="mt-5">
                        <p>{body}</p>
                    </div>
                    <Button variant={'destructive'} className="mt-5 items-center text-center" onClick={onClose}>
                        <p>Close Modal</p>
                    </Button>
                </CardContent>
            </Card>
        </div>
    );
    
}
