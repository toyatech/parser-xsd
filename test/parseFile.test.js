import { readFileSync } from "fs";
import { parseFile } from '../lib/parseFile';
import chai from 'chai';
import chaiAsPrimised from "chai-as-promised";

chai.use(chaiAsPrimised);
const expect = chai.expect;

describe('parseFile', function() {
  
    it('should have context properties', async () => {
        const context = await parseFile(readFileSync("./test/resources/test.xsd"), {strict:true});
        expect(context).to.have.property('elementsById');
        expect(context).to.have.property('elementsByType');
    });

});