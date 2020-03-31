import React, { Component } from 'react';

class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className='projectsContainer'>

                <div className='html'>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/512px-HTML5_logo_and_wordmark.svg.png" alt="html" className='htmlLogo' />
                </div>
                <div className='css'>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/CSS.3.svg/1200px-CSS.3.svg.png" alt="css" className='cssLogo' />
                </div>
                <div className='js'>
                    <img src="https://pluspng.com/img-png/logo-javascript-png-java-script-js-logo-format-ai-javascript-logo-vector-png-213.png" alt="js" className='jsLogo' />
                </div>
                <div className='react'>
                    <img src="https://toppng.com/public/uploads/thumbnail/react-native-svg-transformer-allows-you-import-svg-aperture-science-innovators-logo-11562851994bz4gmmu3qd.png" alt="react" className='reactLogo' />
                </div>

                <div className='project1'>
                    <h2>Dream Journal App</h2>
                    <img src="https://lh3.googleusercontent.com/RiU1eNEaIaKfsr0RPA-KhYO2ntPmM6T879RQgncqhmVFVvs58AG-bATOockoorfgcBcyuhy4-3bgwZHveEYbXN9spm1NAWQhXnVHCp8UwuF4bkL0rKBkpa9GKLr5ypOuSy0pdxhKfSlWzuRTvnEQYxKprx7Q4XWX83rAZ_8R478ASQXHb59tEa8b1OAAeO9TlhQiDM5GJSHhgjXuDKwxy9jVK7vCRi_DW4GgPtJ0tPLIpUtyqmFrK_9QTeosp6ySFt4bpNNHBOJYZq2LWiFF8Olj_V9vtWZDjmc3odYCLhpELYigIfYao0nDwsSAxBbnMchT3s0grBAEfTwLn3RM7Ja-R8hYM6rqW81qFDtWZT9GncI_noWSiDxjeZMGv6n3OxJAxk3MhzLHTsZnL23Rk4fpL0xZMPCgXVWnKJQ15c-vY3n2lBEYm4UK23umm3ZYyGSpw8ZFedBa94vAncA7vGCP46_TBtPvV6dhjF8iduU97AY8JK8mkofn6KpffXbtuS-kdDVqHDCbjCNHqN4YJ5FWxsBguAjASTQSPCa_kZtn5aChkEgF4wE9xJhZ6CGmUoPsh-w8Fr1doBmZpcqhXb09ATwu53aBR7MUUVmfkDff6Rxly05tzOsP4EoLl3YXEbczg9KLS9DCcNxeIMukoddvhi3P5fsdrSZdK3TpwxsPOm_-Rr8aTb6Lgbn4=w1600-h674-no" alt="dream joural" className='dreamImage'/>
                    <br/>
                    <a href="https://github.com/cs-fullstack-2020-spring/200317-react-forms-events-practice-MaryHooker" className='projectLinks'>Check It Out</a>

                    <p className='dreamFavoritesDescription'>This react application gives the user a chance to record everything they would need to remember about their dreams using a form field and a map function</p>
                </div>
                <div className='project2'>
                    <h2>Zodiac App</h2>
                    <img src="https://lh3.googleusercontent.com/biRB61s_DzY4PTAHBQAz7B2tuC0dm5B4Qzjfqy8sN_xuSpVM3ODPH3Plvo-9jB1ooHeYqTxEo1o8S0ZO5QH1t2zhy9vVj6JY0i4O7OQKTosJp9riiXjFq8O_kJhh0R1XLEk0uCA7wgrs6AD-zfzDy2TW1OS-403QVHdqazulTyJ_Vuj7zNiXyy9A9aI9yl_NJ4rcKbZ4DN-rxmiLf5sOm_8dmCL8EiX8ypkeqGYjdQ-t1J6MMA_jyxzgd9Tq2ULU0V8XldUlZtDjDcL_hXsupxvN0Ooe33FxdLrmXk7HoTdku7bwksKl9gJhYgdDqPinIV9kYywYskmdaml-8kfxZx2bjYqlPdDk-8Ln3D6lNmOxWO2fu38JuUHy9PluaMujtI6XK55dcmIK6wDl8erb6Xj9fxwarmkJ_FLu-afEGwmPeZrwTYWGLUJ71jghwooJWlza9AX4-t6Lnua3ia-jFLXVNfn9BRhOXRQch_N76Xlshrl6T_7jMVe-wGOZ2w0ho67p14TfPb5PsOPlna8U_Ux3hKuvalfqI5ISDWpekg2n9FoMNPudz4L-LP9A7aU5i0LmIHOIE8Q7cXZVYMnGIie7jUsOUedf3DHAzm8gJOKJvJRpWyclGB8XCPN_eCoFHLLf9PoKmMicTlspYLlQxMHrDl1ThfJktsqtjP_W_xNWcC24Slwhw2ulyy0K=w1600-h727-no" alt="zodiacImage" className='zodiacImage'/>
                    <br/>
                    <a href="https://github.com/MaryHooker/Projects/tree/master/zodiac-app" className='projectLinks'>Check It Out</a>

                    <p className='zodiacDescription'>This react application provides the user with selective information about their own zodiac sign using images as links</p>
                </div>
                <div className='project3'>
                    <h2>Favorites App</h2>
                    <img src="https://lh3.googleusercontent.com/yPJZDqJVs-U4_MZUxw_HdVCCPQhLcHLByuW2ap694o67dwOAbaw_o2SRH2OlgmOuiKFaARMDxKqodQM1Ki7RtJHaYqR_MA32PxkFUTMhEWGh9aurQ0gWwqwkdMxLbvoA3yTY9Kvi42TPZKn41_p4LZbkUb_NVbnWEViz0vHE8hd29nu_rf0BW8H6-eOTqxOuzDkuyrDyV_6xQe17vOhLbYnH95zVxqRlAIhCZ7Tt_03JcNl_PjbuK2pUe2zKTRIyshEHAKE-FDNwApPS31LqYvA8s5K_M8-p2LvROn1mmDaAlGOsfbq-yzcJMyEQuNiueToap67DXbKIDU3cRCzSfWfMwsJ0nIhbfliXFOlXpuSYCjATRSKIeo1BTYooEBidjsiecZgcvWuBsPwOsnusX6nzsBKghlgPUQiJG-wIBB8uC-MB1-YgR80VGWQkjiJ5eYaYq3dc6Y-ewINHxSbwN1gZbDpDoVWcaaXRNSmeYuflP-xEumZmB1RoMPmf5BRvSxcGelya1pTkbi8I4XbVe84Ve-FglOtPHs31Djey6C9kPTN6lc6s1azdFyaowszutvOW3-T9TF6TJCEKrlRFlHvLEfRtY2VQNBZviQCcQhjZ236upyySx4aEV7p1DkpD9_yjpjWoOgexsT_EgmUMdQ5TSaz1wbObBGwTA-Srhc6a_JtBGmqykrbsz_z8=w1581-h727-no" alt="favoritesImage" className='favoritesImage'/>
                    <br/>
                    <a href="https://github.com/MaryHooker/Projects/tree/master/favorite-things-app" className='projectLinks'>Check It Out</a>
                   
                    <p className='dreamFavoritesDescription'>This react application tells the user of my own personal favorites in my chosen categories and asks for the users as well using links and conidtional rendering</p>
                   
                </div>

            </div >
        );
    }
}

export default Projects;