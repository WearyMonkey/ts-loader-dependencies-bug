var count = 0;

module.exports = function(content) {
  console.log('LOADING: ', this.resource, this.getDependencies());
  this.cacheable();
  return '// ' + count++ + '\n' +  content;
};