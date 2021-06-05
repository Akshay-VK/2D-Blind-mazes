import { Dim2 } from "../util/Vectors/Dim2";
import { BWAnimation } from "../util/BWAnimation";
import { Canvas } from "../screen/Canvas"

export interface  GameObject{
    private dimensions: Dim2;
    private renderImage: BWAnimation;
    update(): void;
    render(ctx: CanvasRenderingContext2D): void;
    applyToCanvas(cnv: Canvas): Canvas;
}
