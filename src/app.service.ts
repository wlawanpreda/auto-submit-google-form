import { Injectable, Logger } from '@nestjs/common';
import { get, set, map, includes, every, eq, join, reject, isNil, remove, random } from 'lodash'
import axios from 'axios';
import { URLSearchParams } from 'url'
import { Cron } from '@nestjs/schedule';

@Injectable()
export class AppService {

  private readonly logger = new Logger(AppService.name);

  // * ตรวจสอบคิวงาน
  // https://t.ly/6qs8Y

  // * google script  
  // https://t.ly/o60b



    // const data = [
    // * https://docs.google.com/forms/d/e/1FAIpQLSeTxEGwORy8NnJ20r3NcTBHkGU0HL3wI4Mzg7chl4K0C0_4vA/viewform
    //   { 
    //     type: 'KSLC',
    //     record: [[attr1[1], attr2[1]]],
    //     url: '1FAIpQLSeTxEGwORy8NnJ20r3NcTBHkGU0HL3wI4Mzg7chl4K0C0_4vA', 
    //     attr: [1405683895, 2062313074, 1013496111, 953475437, 622068130]
    //   },
    // * https://docs.google.com/forms/d/e/1FAIpQLSeTxEGwORy8NnJ20r3NcTBHkGU0HL3wI4Mzg7chl4K0C0_4vA/viewform
    //   { 
    //     type: 'KSLC',
    //     record: [['3ฒค5874', 'UPC (ต่างจังหวัด)']],
    //     url: '1FAIpQLSeTxEGwORy8NnJ20r3NcTBHkGU0HL3wI4Mzg7chl4K0C0_4vA', 
    //     attr: [1405683895, 2062313074, 1013496111, 953475437, 622068130]
    //   },
    // * https://docs.google.com/forms/u/0/d/e/1FAIpQLSccvn0AtV4utbVSvRABj-xP-mogj1uTJR8a-oEq-oWqpXIQCw/viewform
    // { 
    //   type: 'KMLC',
    //   record: [[attr1[0], attr2[1]]],
    //   url: '1FAIpQLSccvn0AtV4utbVSvRABj-xP-mogj1uTJR8a-oEq-oWqpXIQCw', 
    //   attr: [1405683895, 2062313074, 627358796, 325886033, 1742535871]
    // },
    // ]

  @Cron('0 16 * * *')
  async production_KMLC(): Promise<any> {

    const data = [
      // * https://docs.google.com/forms/u/0/d/e/1FAIpQLSccvn0AtV4utbVSvRABj-xP-mogj1uTJR8a-oEq-oWqpXIQCw/viewform
      { 
        type: 'KMLC',
        record: [['3ฒก3943', 'BKK (กทม. และปริมณฑล)']],
          url: '1FAIpQLSccvn0AtV4utbVSvRABj-xP-mogj1uTJR8a-oEq-oWqpXIQCw', 
          attr: [1405683895, 2062313074, 627358796, 325886033, 1742535871]
      }
    ]

    const payloads = this.formatPayloads(data)
    await this.action(payloads, 'KMLC')
  }

  @Cron('0 16 * * *')
  async production_KPLC(): Promise<any> {

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
    await this.action(payloads, 'KPLC')
  }

  @Cron('2 0 16 * * *')
  async productionKPLC2(): Promise<any> {

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
    await this.action(payloads, 'KPLC2')
  }

  @Cron('3 0 16 * * *')
  async productionKBLC(): Promise<any> {

    const attr1 = ['บษ8179', 'ฒส8062']
    const attr2 = ['BKK (กทม. และปริมณฑล)', 'UPC (ต่างจังหวัด)']

    const data = [
      // https://docs.google.com/forms/u/0/d/e/1FAIpQLSc-7h1j0sPlTpcUDVLkWz79d6y9uxSrFBuIz32TjZApTOcWAQ/viewform
      { 
        type: 'KBLC',
        record: [[attr1[0], attr2[1], 'mm news', 'ณัฐพล บัวบานพร้อม', '0894788344'], [attr1[1], attr2[1]]],
        url: '1FAIpQLSc-7h1j0sPlTpcUDVLkWz79d6y9uxSrFBuIz32TjZApTOcWAQ', 
        attr: [1405683895, 2062313074, 403619387, 1527148059, 719396994]
      },
    ]

    const payloads = this.formatPayloads(data)
    await this.action(payloads, 'KBLC')
  }


  @Cron('0 17 * * *')
  async productionMTPR(): Promise<any> {

    const attr1 = ['บษ8179', 'ฒส8062']
    const attr2 = ['BKK (กทม. และปริมณฑล)', 'UPC (ต่างจังหวัด)']

    const data = [
      // https://docs.google.com/forms/u/0/d/e/1FAIpQLSeN1s5WuC9H9iPEhdJai5kKzECD5DVyLZpsXjKN5ssTxLrMaw/viewform
      { 
        type: 'MTPR',
        record: [[attr1[0], attr2[1], 'mm news', 'ณัฐพล บัวบานพร้อม', '0894788344']],
        url: '1FAIpQLSeN1s5WuC9H9iPEhdJai5kKzECD5DVyLZpsXjKN5ssTxLrMaw', 
        attr: [1405683895, 2062313074, 546717404, 1556342174, 2136555444]
      },
    ]

    const payloads = this.formatPayloads(data)
    await this.action(payloads, 'MTPR')
  }

  async dev(): Promise<string> {

    const attr1 = ['บษ8179', 'ฒส8062']
    const attr2 = ['BKK (กทม. และปริมณฑล)', 'UPC (ต่างจังหวัด)']

    const data = [
      // https://docs.google.com/forms/u/0/d/e/1FAIpQLScUmK07U_4I6-EPL3wHigsPFnYsrlARyzyYp9Ey0x9JMxFvCg/viewform
      { 
        type: 'TEST',
        record: [[attr1[0], attr2[0], 'mm news', 'ณัฐพล', '0894788344'], [attr1[1], attr2[0], 'mm news', 'นที', '0894788344']],
        url: '1FAIpQLScUmK07U_4I6-EPL3wHigsPFnYsrlARyzyYp9Ey0x9JMxFvCg', 
        attr: [1053918869, 947528896, 577629461, 1893458426, 1652847675]
      },
    ]

    const payloads = this.formatPayloads(data)
    this.action(payloads, 'DEV')

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
      // console.time(`⏰  ${name}  ~ ${index}`)
      const actions = map(payloads, async ({ _id, url, payload }) => {  
        try {
          const params = new URLSearchParams(payload);       
          const response = await axios.post(url, params, { timeout: 3000 });
          if (!eq(200, get(response, 'status')) || !eq('OK', get(response, 'statusText'))) {
            this.logger.error(`👌 ${name} 👌 ${_id} status: ${get(response, 'status')}, statusText: ${get(response, 'statusText')}`);
          }

          const status = includes(get(response, 'data', ''), 'ลงคิวเรียบร้อยแล้วค่ะ')
          const notOpen = includes(get(response, 'data', ''), 'สามารถลงคิวได้ตอน 16:00 น. นะค่ะ ^^') || includes(get(response, 'data', ''), 'สามารถลงคิวได้ตอน 17:00 น. นะค่ะ ^^')

          if (status && !notOpen) {
            this.logger.log(`🤡 ${name} 🤡~ AppService ~ actions ~ _id: ${_id}, status: ${status}, notOpen: ${notOpen}`)
            remove(payloads, ['_id', _id])
            return `${_id}#ALREADY_SUBMIT`
          }

          if (status && notOpen) {
            this.logger.warn(`👹 ${name} 👹~ AppService ~ actions ~ _id: ${_id}, status: ${status}, notOpen: ${notOpen}`)
            await this.delay(3000)

            const _response = await axios.post(url, params, { timeout: 3000 });

            const _status = includes(get(_response, 'data', ''), 'ลงคิวเรียบร้อยแล้วค่ะ')
            const _notOpen = includes(get(_response, 'data', ''), 'สามารถลงคิวได้ตอน 16:00 น. นะค่ะ ^^') || includes(get(_response, 'data', ''), 'สามารถลงคิวได้ตอน 17:00 น. นะค่ะ ^^')
              
            if (_status && !_notOpen) {
              this.logger.log(`🤡 ${name} 🤡~ AppService ~ actions 2️⃣  ~ _id: ${_id}, _status: ${_status}, _notOpen: ${_notOpen}`)
              remove(payloads, ['_id', _id])
              return `${_id}#ALREADY_SUBMIT`
            }
            return `${_id}#MAY_BE_OPEN_IN_NEXT_SEC`
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

          const timeout = error.toString().includes('Error: Request failed with status code 408')
          if (timeout) {
            return 'timeout'
          }

          const error503 = error.toString().includes('Error: Request failed with status code 503')
          if (error503) {
            return 'error503'
          }
          
          this.logger.error(`🚀 ${name} 🚀 ~ line 177 ~ AppService ~ actions ~ error.toString() ${error.toString()}\n`)
          return null
        }
      })

      const result = await Promise.all(actions)
      const resultWithOutNil = reject(result, isNil)
      this.logger.debug(`🚀 ${name} 🚀 ~ AppService ~ ${index} ${JSON.stringify(resultWithOutNil)}`)

      // eq('isTimeout', o) || eq('maxRedirects', o) ||  || eq('timeout', o)
      if (every(resultWithOutNil, (o) => eq('tooManyRequests', o))) {
        delayIndex++;
        if (delayIndex % 3 == 0) {
          let _sec = (delayIndex / 3) * 200
          if (_sec > 5000) _sec = 5000
          this.logger.error(`👌 ${name} 👌 delay ${_sec} millisec`);
          await this.delay(_sec)
        }
      }

      doAgain = get(resultWithOutNil, 'length') > 0 && index < (60 * 15)
      await this.delay(750)
      // console.timeEnd(`⏰  ${name}  ~ ${index}`)
      index++
    } while (doAgain);

  }

  
}
