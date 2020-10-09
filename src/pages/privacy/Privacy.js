import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../components/footer/Footer';
import "./Privacy.css"

function Privacy() { //Funtion stated the Privacy Policy for the App
    return (
        <div id="privacy-policy">
            <Link id="return-button" to="/">Return home</Link>
            <h1>Privacy policy</h1>
            <h2>Data usage</h2>
            <p>This website is an application that lets you create cool images to use on yout GitHub readme, so you can show people information about you and your work. The inputs on every form collect the data you type and save it on the local storage of your browser. This data is not sent or saved in any service or database; the local storage of your browser is the only place your data is. Apart from this and as stated in the notes of every section, <strong>every input is optional</strong>. If you don't type anything in an image, it will not be displayed. If you type on at least one input in one section, it will create the image (with only the information you've typed). This is an optional service and serves <strong>only</strong> to show other GitHub members or non-GitHub members (everyone who visits your GitHub profile) information about you and your work. If you use this is because <strong>you</strong> decide to. <strong>No data is saved. The data is only saved on your local storage from your browser</strong>. Keep in mind this is intended to be place on your GitHub readme, which can be seen by any person (unless you've set it to private). <strong>You</strong> decide which information show on your GitHub readme.<br/>This website has nothing legally or commercially to do with <a href="https://github.com">GitHub</a>.</p>
            <h2>In-depth functionality</h2>
            <p>This website takes the text inputs from <code>input</code> fields, all of them inside a <code>form</code> tag. The button below that is used in some sections to change between forms is not inside the <code>form</code> tag; it's in the container that wraps the form and the extra information. The button interacts only with React hooks to change the state. There's no interaction with the button of the form so it doesn't storage any data in any database, nor sends the data to a service or database.</p>
            <h2>Manage your data</h2>
            <p>As written before, the website stores locally in the browser the data you've written in every input of every form. This data will keep even if you change the page or if you close the website tab or browser, unless you manually delete it. To see this data, open the <strong>Developer tools</strong>, then click on the <strong>Application</strong> tab and click on <strong>Local Storage</strong>. If you want to delete this data, click on the <strong>Clear All</strong> icon/button.</p>
		<Footer/>        
	</div>
	
    );
}

export default Privacy; //Exporting this function for further use
