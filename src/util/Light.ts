export class Light{
    
    private birghtnessValue: number;
    public min;
    public max;
    public emissive: boolean;
    constructor(birghtnessValue: number){
        //set min and maxvrightness values here...
        this.min = 1;
        this.max = 10;
        //---------------
        

        if(birghtnessValue > 0 && birghtnessValue < 11){
            this.birghtnessValue = birghtnessValue;
            //checking if light is emissive or not
            if(birghtnessValue != 0){
                this.emissive = true;

            }else{
                this.emissive = false;
            }
        }else{
            console.log('Error: Invalid light strength.')
            throw new Error("Invalid light strength.")
        }
    }
    setEmissive(){
        this.emissive = true;
    }
    setNonEmissive(){
        this.emissive = false;

    }
    switchEmissionState(){
        this.emissive = !this.emissive;
    }
    clampBrightness(val: number){
        if(val < this.min){
            return 1;
        }
        if(val > this.max){
            return 10;
        }
        return val;
    }
    addBrightnessVal(val: number){
        this.birghtnessValue += val;
        this.birghtnessValue = this.clampBrightness(this.birghtnessValue);
    }

    //GETTERS & SETTERS
    public getBrightnessValue(): number{
        return this.birghtnessValue;
    }
    public setBrightnessValue(val: number){
        if(val != this.clampBrightness(val)){
            console.log('Error: Unclamped brightness value specified.');
            return;
        }
        this.birghtnessValue = val;
    }
}