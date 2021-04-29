export class Light{
    
    birghtnessValue: Number;
    constructor(birghtnessValue: number){
        if(birghtnessValue > 0 && birghtnessValue < 11){
            this.birghtnessValue = birghtnessValue;
        }else{
            throw new Error("invalid light strength.")
        }
    }
}