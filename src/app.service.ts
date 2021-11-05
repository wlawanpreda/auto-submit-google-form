import { Injectable, Logger } from '@nestjs/common';
import { get, set, map, includes, every, eq, join, reject, isNil, remove, random } from 'lodash'
import axios from 'axios';
import { URLSearchParams } from 'url'
import { Cron } from '@nestjs/schedule';

@Injectable()
export class AppService {

  private readonly logger = new Logger(AppService.name);


  // https://t.ly/o60b

  @Cron('0 16 * * *')
  async production0(): Promise<any> {

    const attr1 = ['บษ8179', 'ฒส8062']
    const attr2 = ['BKK (กทม. และปริมณฑล)', 'UPC (ต่างจังหวัด)']

    const data = [
      // https://docs.google.com/forms/u/0/d/e/1FAIpQLSezoXnCDSGOIJoDyfto003IGypUwaG4kyAxb4NVJVn7F_oYLQ/viewform
      { 
        type: 'KPLC',
        record: [[attr1[0], attr2[0]], [attr1[1], attr2[0]]],
        url: '1FAIpQLSezoXnCDSGOIJoDyfto003IGypUwaG4kyAxb4NVJVn7F_oYLQ', 
        attr: [1405683895, 2062313074, 546717404, 1556342174, 2136555444]
      }
    ]

    const payloads = this.formatPayloads(data)
    await this.action(payloads)
  }

  @Cron('0 16 * * *')
  async production1(): Promise<any> {

    const attr1 = ['บษ8179', 'ฒส8062']
    const attr2 = ['BKK (กทม. และปริมณฑล)', 'UPC (ต่างจังหวัด)']

    const data = [
      // https://docs.google.com/forms/u/0/d/e/1FAIpQLSemni89uZtx8vbI2BKEbf12rTCqFLN4LqKREyu0tHvj3qvMlg/viewform
      { 
        type: 'KPLC2',
        record: [[attr1[0], attr2[0]], [attr1[1], attr2[0]]],
        url: '1FAIpQLSemni89uZtx8vbI2BKEbf12rTCqFLN4LqKREyu0tHvj3qvMlg', 
        attr: [1405683895, 2062313074, 546717404, 1556342174, 2136555444]
      },
    ]

    const payloads = this.formatPayloads(data)
    await this.action(payloads)
  }

  @Cron('0 16 * * *')
  async production2(): Promise<any> {

    const attr1 = ['บษ8179', 'ฒส8062']
    const attr2 = ['BKK (กทม. และปริมณฑล)', 'UPC (ต่างจังหวัด)']

    const data = [
      // https://docs.google.com/forms/u/0/d/e/1FAIpQLSccvn0AtV4utbVSvRABj-xP-mogj1uTJR8a-oEq-oWqpXIQCw/viewform
      // { 
      //   type: 'KMLC',
      //   record: [[attr1[0], attr2[1]]],
      //   url: '1FAIpQLSccvn0AtV4utbVSvRABj-xP-mogj1uTJR8a-oEq-oWqpXIQCw', 
      //   attr: [1405683895, 2062313074, 627358796, 325886033, 1742535871]
      // },
      // https://docs.google.com/forms/u/0/d/e/1FAIpQLSc-7h1j0sPlTpcUDVLkWz79d6y9uxSrFBuIz32TjZApTOcWAQ/viewform
      { 
        type: 'KBLC',
        record: [[attr1[0], attr2[1]]],
        url: '1FAIpQLSc-7h1j0sPlTpcUDVLkWz79d6y9uxSrFBuIz32TjZApTOcWAQ', 
        attr: [1405683895, 2062313074, 403619387, 1527148059, 719396994]
      },
    ]

    const payloads = this.formatPayloads(data)
    await this.action(payloads)
  }

  // @Cron('0 16 * * *')
  // async production3(): Promise<any> {

  //   const attr1 = ['บษ8179', 'ฒส8062']
  //   const attr2 = ['BKK (กทม. และปริมณฑล)', 'UPC (ต่างจังหวัด)']

  //   const data = [
  //     // https://docs.google.com/forms/d/e/1FAIpQLSeTxEGwORy8NnJ20r3NcTBHkGU0HL3wI4Mzg7chl4K0C0_4vA/viewform
  //     { 
  //       type: 'KSLC',
  //       record: [[attr1[1], attr2[1]]],
  //       url: '1FAIpQLSeTxEGwORy8NnJ20r3NcTBHkGU0HL3wI4Mzg7chl4K0C0_4vA', 
  //       attr: [1405683895, 2062313074, 1013496111, 953475437, 622068130]
  //     },
  //   ]

  //   const payloads = this.formatPayloads(data)
  //   await this.action(payloads)
  // }


  @Cron('0 17 * * *')
  async production4(): Promise<any> {

    const attr1 = ['บษ8179', 'ฒส8062']
    const attr2 = ['BKK (กทม. และปริมณฑล)', 'UPC (ต่างจังหวัด)']

    const data = [
      // https://docs.google.com/forms/u/0/d/e/1FAIpQLSeN1s5WuC9H9iPEhdJai5kKzECD5DVyLZpsXjKN5ssTxLrMaw/viewform
      { 
        type: 'MTPR',
        record: [[attr1[0], attr2[1]]],
        url: '1FAIpQLSeN1s5WuC9H9iPEhdJai5kKzECD5DVyLZpsXjKN5ssTxLrMaw', 
        attr: [1405683895, 2062313074, 546717404, 1556342174, 2136555444]
      },
    ]

    const payloads = this.formatPayloads(data)
    await this.action(payloads)
  }

  async dev(): Promise<string> {

    const attr1 = ['บษ8179', 'ฒส8062']
    const attr2 = ['BKK (กทม. และปริมณฑล)', 'UPC (ต่างจังหวัด)']

    const data = [
      // https://docs.google.com/forms/u/0/d/e/1FAIpQLScUmK07U_4I6-EPL3wHigsPFnYsrlARyzyYp9Ey0x9JMxFvCg/viewform
      { 
        type: 'TEST',
        record: [[attr1[0], attr2[0]], [attr1[1], attr2[0]], [attr1[0], attr2[1]], [attr1[1], attr2[1]]],
        url: '1FAIpQLScUmK07U_4I6-EPL3wHigsPFnYsrlARyzyYp9Ey0x9JMxFvCg', 
        attr: [1053918869, 947528896, 577629461, 1893458426, 1652847675]
      },
    ]

    const payloads = this.formatPayloads(data)
    this.action(payloads)

    return 'dev done!!!'
  }

  delay(ms) {
    return new Promise<void>((resolve) => setTimeout(() => resolve(), ms))
  }

  formatPayloads(data) {
    const payloads = []
    map(data, (row) => {
      const url = join(['https://docs.google.com/forms/u/0/d/e', get(row, 'url', ''), 'formResponse?&pageHistory=0,1'], '/')
      map(get(row, 'record', []), (r) => {
        const payload = {}
        map(get(row, 'attr', []), (attr, i) => { payload[`entry.${attr}`] = get(r, i, '') })
        payloads.push({ url, payload, _id: `${get(row, 'type', '')}#${get(r, '0', '')}` })
      })
    })
    return payloads
  }

  async action(payloads, name = random(0, 99999)) {
    
    let index = 1;
    let doAgain = false;
    let delayIndex = 0;
    do {
      // console.time(`⏰ ${name} ~ ${index}`)
      const actions = map(payloads, async ({ _id, url, payload }) => {  
        try {
          const params = new URLSearchParams(payload);       
          const response = await axios.post(url, params, { timeout: 3000 });
          if (!eq(200, get(response, 'status')) || !eq('OK', get(response, 'statusText'))) {
            this.logger.error(`👌${name}👌 ${_id} status: ${get(response, 'status')}, statusText: ${get(response, 'statusText')}`);
          }

          const status = includes(get(response, 'data', ''), 'ลงคิวเรียบร้อยแล้วค่ะ')
          const notOpen = includes(get(response, 'data', ''), 'สามารถลงคิวได้ตอน 16:00 น. นะค่ะ ^^') || includes(get(response, 'data', ''), 'สามารถลงคิวได้ตอน 17:00 น. นะค่ะ ^^')

          if (status && !notOpen) {
            this.logger.log(`🤡${name}🤡~ file: app.service.ts ~ AppService ~ actions ~ _id: ${_id}, status: ${status}, notOpen: ${notOpen}`)
            remove(payloads, ['_id', _id])
            return `${_id}#ALREADY_SUBMIT`
          }

          const code = get(response, 'status')

          if (!status && notOpen) {
            return `${_id}#FORM_NOT_OPEN`
          }
          
          
          return { _id, status, notOpen, code }
        } catch (error) {
          const maxRedirects = eq('Error [ERR_FR_TOO_MANY_REDIRECTS]: Maximum number of redirects exceeded', error.toString()) 
          if (maxRedirects) {
            return 'maxRedirects'
          }

          const isTimeout = error.toString().includes('Error: timeout of')
          if (isTimeout) {
            return 'isTimeout'
          }

          const tooManyRequests = error.toString().includes('Error: Request failed with status code 429')
          if (tooManyRequests) {
            return 'tooManyRequests'
          }
          
          this.logger.error(`🚀${name}🚀 ~ file: app.service.ts ~ line 177 ~ AppService ~ actions ~ error.toString() ${error.toString()}\n`)
          return null
        }
      })

      const result = await Promise.all(actions)
      const resultWithOutNil = reject(result, isNil)
      this.logger.debug(`🚀${name}🚀 ~ AppService ~ ${index} ${JSON.stringify(resultWithOutNil)}`)

      if (every(resultWithOutNil, (o) => eq('isTimeout', o) || eq('maxRedirects', o) || eq('tooManyRequests', o))) {
        delayIndex++;
        if (delayIndex > 3) {
          this.logger.error(`👌${name}👌 delay 2 sec`);
          await this.delay(2000)
          delayIndex = 0
        }
      }

      doAgain = get(resultWithOutNil, 'length') > 0 && index < (60 * 15)
      // console.timeEnd(`⏰ ${name} ~ ${index}`)
      index++
    } while (doAgain);

  }

  
}
