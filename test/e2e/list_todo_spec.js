describe('The todo app', function() {

  var ptor;

  beforeEach(function() {
    browser.get('http://127.0.0.1:8080/');
    ptor = protractor.getInstance();
    // Um, this is not good. Not sure why it is needed :-(
    ptor.ignoreSynchronization = true;
  });

  it('should list several todos page', function() {
    var todoElements = by.repeater('todo in getTodos()');
    var todos = [];
    for (var i = 0; i < 4; i++) {
      todos[i] = element(todoElements.row(i).column('title'));
    }
    expect(todos[0].getText()).toEqual('Buy milk');
    expect(todos[1].getText()).toEqual('Write blog post');
    expect(todos[2].getText()).toEqual('Finish talk proposal');
    expect(todos[3].getText()).toEqual('World Domination');
  });
});
