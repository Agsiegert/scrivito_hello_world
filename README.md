## Instructions

`touch .env`

Add your Scrivito tenant ID to .env

`SCRIVITO_TENANT=_YOUR TENATN ID FROM MY.SCRIVITO.COM_`

`npm install`

`npm start`

### Remove all the sample content from your tenant

##### NOTE: if you have added, replaced or modified the content in your Scrivito instance the code below will remove all of it. Before you run the command be sure that is what you wish to do.

You will need to be in edit mode and in a working copy. Just add “/scrivito” to the URL (after the hostname) and choose name for your working copy. Then open the browser console and switch the execution context from `top` to `scrivito_application`.

```JSX
//To Remove All content, run in your browser console:

Scrivito.load(() => {
    const all = [...Scrivito.Obj.all()];
      return all;
  }).then(objs => {
    objs.forEach(o => {
      console.log(`Deleting ${o.id()}...`);
      o.destroy();
    });
    console.log('Done deleting all objs.');
  });
```

Once the command above is finished running, you can continue to work in your working copy and the content will be removed. Once you publish this working copy the content will only be available as a snapshot in your histories, once you have published more times than the number of archived copies you have in your plan it will be gone.

### Create a Homepage

Again in Edit mode, we need to create a homepage using the browser console. So open the console and update the execution context from top to scrivito_application.  In the console, enter: 

```JavaScript
h = Scrivito.getClass("Homepage").create({ title: "Homepage" });
h.update({ _path: "/" });
```

Refresh your page and you will now see a blank Homepage within the Scrivito App.

You can add some text to the page by adding a TextWidget.

Finally, publish your working copy to set the homepage.

This is extremely basic installation, use the [Scrivito Example App](https://github.com/Scrivito/scrivito_example_app_js) and a reference as well as our [docuemtnation](https://www.scrivito.com/documentation) to build up your project with more functionality and styles.

