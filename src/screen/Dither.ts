import { Canvas } from "./Canvas";

export class Dither{
    constructor(){

    }

    public ditherSingle(canvas: Canvas, ditherLevel: number){
        var rows: number = canvas.getCanvasRows();
        var columns = canvas.getCanvasColumns();
        var ditherLevel: number = ditherLevel;
               
        //DITHER

        // for each y from top to bottom do
        //     for each x from left to right do
        //         oldpixel := pixel[x][y]
        //         newpixel := find_closest_palette_color(oldpixel)
        //         pixel[x][y] := newpixel
        //         quant_error := oldpixel - newpixel
        //         pixel[x + 1][y    ] := pixel[x + 1][y    ] + quant_error × 7 / 16
        //         pixel[x - 1][y + 1] := pixel[x - 1][y + 1] + quant_error × 3 / 16
        //         pixel[x    ][y + 1] := pixel[x    ][y + 1] + quant_error × 5 / 16
        //         pixel[x + 1][y + 1] := pixel[x + 1][y + 1] + quant_error × 1 / 16

        //find_closest_palette_color(oldpixel) = round(oldpixel / 256)

        for(let y = 1; y < rows-1;y++){
            for(let x = 1; x < columns-1;x++){
                var pixelColor: number = canvas.getColorVal(x,y);
                var newPixelColor: number = (Math.round(  pixelColor / (255*(ditherLevel-1))  ) * (ditherLevel-1))*255;
                canvas.setColorVal(x,y,newPixelColor);
                var quant_error: number = pixelColor-newPixelColor;
                
            }
        }

    }
    public ditherMultiple(canvases: Canvas[]){
        
    }
}