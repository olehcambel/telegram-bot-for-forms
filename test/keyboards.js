const { expect } = require("chai");
const keyboards = require('../helpers/keyboards');
const sinon = require('sinon');
const strings = require('../helpers/strings');
const bot = require('../helpers/telegramBot');

describe('Keyboards ', () => {

  describe('#sendKeyboard()', () => {
    let sendMessageFail, sendMessageSuccess
    let then = (err) => {
      if (err) {
        expect(err).to.not.equal(null)
      } else {
        expect(err).to.equal(null)
      }
    }

    describe('check call callback', () => {
      let deferredSuccess

      before(() => {
        let responseData = {
          'data': {}
        }

        deferredSuccess = new Promise((resolve, reject) => { resolve(responseData) })
      })

      it('should be call @then if @then (function) exist', (done) => {
        sendMessageSuccess = sinon.stub(bot, 'sendMessage').returns(deferredSuccess)
        
        keyboards.sendKeyboard(bot, 312577109, 'text', [], (some) => {
          done()
        })

      })
      after(() => {
        sendMessageSuccess.restore()
      })
    })

    describe('with error answer from server', () => {
      let responseData = {
        'error': {
          'code': 404,
          'message': 'For test 1'
        }
      }
      let deferredFail = new Promise((resolve, reject) => { reject(responseData) })

      it('should be send err in @then if @then (function) exist', () => {
        sendMessageFail = sinon.stub(bot, 'sendMessage').returns(deferredFail)
        return keyboards.sendKeyboard(bot, 312577109, '', [], then)
      })
      after(() => {
        sendMessageFail.restore()
      })
    })

    describe('with success answer from server', () => {
      let deferredSuccess
      before(() => {
        let responseData = {
          'data': {}
        }
        deferredSuccess = new Promise((resolve, reject) => { resolve(responseData) })
      })

      it('should be not send err in @then if @then (function) exist', () => {
        sendMessageSuccess = sinon.stub(bot, 'sendMessage').returns(deferredSuccess)
        return keyboards.sendKeyboard(bot, 312577109, 'text', [], then)
      })

      after(() => {
        sendMessageSuccess.restore()
      })
    })
  })
})