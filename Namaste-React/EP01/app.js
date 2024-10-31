        //create element takes 3 arugments 
        const heading = React.createElement('h1', {}, 'Hello World From React');
        const root = ReactDOM.createRoot(document.getElementById('root'));
        root.render(heading);