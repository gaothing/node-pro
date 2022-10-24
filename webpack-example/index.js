const utils = require('./utils');
import   {debounce} from 'g-debounce-throttle'
function test(params) {
  
 console.log(params) 
}
test(utils.name)
console.log({debounce})
