import client from './../fake/api-client'
import addApiCallsToClient from 'src/domains/api/jobs/add-api-calls'
import chai from 'chai'
import sinonChai from 'sinon-chai'

chai.use(sinonChai)

addApiCallsToClient(client)
