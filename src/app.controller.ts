import { Controller, Get } from '@nestjs/common';

@Controller('')
export class AppController {
    @Get()
    home(){
        return "Rest API by Kun Woo Kim"; 
    }
}
