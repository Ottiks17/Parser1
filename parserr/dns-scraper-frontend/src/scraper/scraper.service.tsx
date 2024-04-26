import { Injectable } from '@nestjs/common';
import * as puppeteer from 'puppeteer';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ScrapedData } from './entities/scraper.entity';

@Injectable()
export class ScraperService {
  async scrapeData(url: string): Promise<any> {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);
    await this.scrapedDataRepository.save(scrapedData);

    const data = await page.evaluate(() => {
      const title = document.querySelector('.product-title')?.textContent;
      const price = document.querySelector('.product-price')?.textContent;
      return { title, price };

    constructor(
        @InjectRepository(ScrapedData)
        private scrapedDataRepository: Repository<ScrapedData>,
      ) {}
    });

    await browser.close();
    return data; }}
    .