function customRender(reactElement,con){
    /*const domElement=document.createElement(reactElement.type);
    domElement.innerHTML=reactElement.children;
    domElement.setAttribute('href',reactElement.props.href);
    domElement.setAttribute('target',reactElement.props.target);
    con.appendChild(domElement); */

    const domElement=document.createElement(reactElement.type);
    domElement.innerHTML=reactElement.children;

    for (const prop in reactElement.props) {
       if(prop == 'children') continue;
       domElement.setAttribute(prop,reactElement.props[prop])
    }
    con.appendChild(domElement);
}

const reactElement={
    type:'a',
    props:{
        href: 'https://example.com',
        target:'_blank'
    },
    children:'Click me'
}

const mainCon=document.querySelector('#root');

customRender(reactElement,mainCon);