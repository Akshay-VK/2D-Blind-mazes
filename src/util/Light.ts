export class Light{
    
    birghtnessValue: number;
    constructor(birghtnessValue: number){
        if(birghtnessValue > 0 && birghtnessValue < 11){
            this.birghtnessValue = birghtnessValue;
        }else{
            console.log('Error: Invalid light strength.')
            throw new Error("Invalid light strength.")
        }
    }
    clampBrightness(val: number){
        if(val <= 0){
            return 1;
        }
        if(val >=11){
            return 10;
        }
        return val;
    }
    addBrightnessVal(val: number){
        this.birghtnessValue += val;
        this.birghtnessValue = this.clampBrightness(this.birghtnessValue);
    }
}