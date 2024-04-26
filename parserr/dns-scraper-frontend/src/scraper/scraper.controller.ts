import { Controller, Get, Query } from '@nestjs/common';
import { ScraperService } from './scraper.service';

@Controller('scrape')
export class ScraperController {
  constructor(private readonly scraperService: ScraperService) {}

  @Get()
  async scrape(@Query('url') url: string) {
    return this.scraperService.scrapeData(url);
  }
}