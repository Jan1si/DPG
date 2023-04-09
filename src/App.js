import React from 'react';

const App = () => {
    return (
        <div className="App">
            <div className="container">
                <div className="helloBlock">
                    <h1>Hello</h1>
                </div>
                <div className="formBlock">
                    <form>
                        <section className="info">
                            <p className="baseText">For business enquiries please use the form below</p>
                            <p className="promtText">Required</p>
                        </section>
                        <section className="inputBlock">
                            <div className="inputGroup">
                                <label htmlFor="name">Name</label>
                                <input type="text" name='name'/>
                            </div>
                            <div className="inputGroup">
                                <label htmlFor="name">Company</label>
                                <input type="text" name='company'/>
                            </div>
                            <div className="inputGroup">
                                <label htmlFor="name">E-mail</label>
                                <input type="email" name='email'/>
                            </div>
                            <div className="inputGroup">
                                <label htmlFor="name">Phone</label>
                                <input type="text" name='phone'/>
                            </div>
                            <div className="inputGroup">
                                <label htmlFor="name">Message</label>
                                <textarea name="message"></textarea>
                            </div>
                            <div className="checkBoxGroup">
                                <div className="checkbox-wrapper">
                                    <input id="customCheckBox" name='accept' type="checkbox"/>
                                    <span></span>
                                    <label htmlFor='customCheckBox'></label>
                                </div>
                                <label htmlFor="accept">I accept <p className='link'>Terms and Privacy Policy</p> </label>
                            </div>
                            <button className="btnSend">Send</button>
                        </section>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default App;
