//Default Script called by Page's index.html && will loaded once page has been loaded.
//You can import modules and use ui elements, see the Docs.
//YOU CAN DELETE ALL CONTENT OF THIS JAVASCRIPT.

page.on('ready', function(e){
  //when page have full loaded.
  //alert('asd');
});

page.on('close', function(e){
  //when user change to other page.
  //you can cancel page change by return a 'false' boolean (return false);
});

function openDocumentation(){
  app.openLink('https://github.com/nid666');
}


//CONTEXT MENU EXAMPLE
var contextItems = [ { icon:'done', label:'Item 1', value:'item1' }, //you can remove icon.
  { icon:'library_books', label:'Item 2', value:'item2', action:openDocumentation }, //action = predefined function;
  { label:'Item 3', value:'item3', linebreak:true } ];

async function async_contextMenuExample(){
  var res = await new ContextMenu( contextItems, 'Menu Title (OPTIONAL)');
  //wait for response, remember to make an async function to wait a response;
  //if user close the menu this will return 'null';
  alert( `"${res}" has been selected.` ); //show response
}

function contextMenuExample(){
  new ContextMenu( contextItems ); //no async=menu
}

//DialogBox Example
var dialogButtons = [
  {label:"See Docs", action:openDocumentation, value:'see_docs' },
  {label:'Cancel', value:'cancel' } //value & action are OPTIONAL.
];

function dialogBoxExample(){
  new DialogBox({
    title: 'no-async DialogBox', // OPTIONAL
    icon: 'example-icon.svg', // OPTIONAL, local assets icon/image supported.
    message: 'This is a DialogBox Example', // OPTIONAL
    buttons: dialogButtons
  });
}

async function async_dialogBoxExample(){
  var res = await new DialogBox({
    title: 'Async DialogBox',
    icon: 'help', //material-icons supported
    message: 'This is a DialogBox Example',
    html: 'You can insert +extra html content.',
    buttons: dialogButtons
  });
  alert( `'${res}' has been selected.`);
}

async function dialogInputBoxExample(){
  var res = await new DialogBox({
    title: 'Input DialogBox',
    message: 'Multiple Inputs example.',
    inputs: [
      { name:"text-input", type:'text', label: 'Name' },
      { name:"checkbox-input", type:'checkbox', label: 'Checkbox in DialogBox' },
      { name:"toggle-input", type:'toggle', label: 'Toggle in DialogBox', button:0 }
    ], //you can set an Array of objects (as buttons) for multiple inputfields.
    //inputs value will return in the first button by default, but you can select button index with 'button' property.
    buttons: [
      { label:'Select', value:'ok' }, //this is the button '0' because is the first button in the buttons Array.
      { label:'Cancel', value:'cancelled' }
    ]
  }); //please see docs for more details.

  var result = JSON.stringify( res, null, 2 ); //.ignore
  alert( `Result => \n ${result}` ); //finally get result;
  //@IMPORTANT INFO $==<>
  // if you set many inputs for one button this will return an object like => '{ 'input-name': 'text', 'toggle-name': false }'
  // for this reason is too important set a name property for the inputs.
  // if the button have value too, this will replaced by inputs values.
  //================
}

//CHECKBOX EXAMPLE
function showCheckboxValues(){
  alert(`Checkbox 1 :: ${ page.getCheckbox('checkbox-1') }
Checkbox 2 :: ${ page.getCheckbox('checkbox-2') }
Checkbox 3 :: ${ page.getCheckbox('checkbox-3') }
Checkbox 4 (big) :: ${ page.getCheckbox('checkbox-big') }
Checkbox 5 (small) :: ${ page.getCheckbox('checkbox-small') }`);
}


//TOGGLE EXAMPLE
function showToggleValues(){
  alert(`Toggle 1 :: ${ page.getToggle('toggle-1') }
Toggle 2 :: ${ page.getToggle('toggle-2') }
Toggle 3 :: ${ page.getToggle('toggle-3') }
Toggle 4 :: ${ page.getToggle('toggle-4') }`);
}
