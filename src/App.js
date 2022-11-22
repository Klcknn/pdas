import "bulma/css/bulma.css";
import ProfileCard from "./ProfileCard";
import AlexaImage from "./images/alexa.png";
import CortanaImage from "./images/cortana.png";
import KiriImage from "./images/siri.png";

function App() {
    return (
        <div>
            <section class="hero is-primary">
                <div class="hero-body">
                    <p class="title has-text-centered">Profile Card Assasiants</p>
                    <p class="subtitle has-text-centered has-text-dark">Bölüm 3: Building with Reusable Components</p>
                </div>
            </section>
            <div className="container">
                <section className="section">
                    <div className="columns">
                        <div className="column is-4">
                            <ProfileCard 
                                title="Alexa" 
                                text="alexa@76" 
                                image={AlexaImage}
                                description="Alexa was created by Amazon Web Services and help you buy for your"
                            />
                        </div>
                        <div className="column is-4">
                            <ProfileCard 
                                title="Cortana" 
                                text="cortana@26" 
                                image={CortanaImage} 
                                description="Cortana was made by Microsoft and help you buy for your"    
                            />
                        </div>
                        <div className="column is-4">
                            <ProfileCard 
                                title="Kiri Ass" 
                                text="kiri@14" 
                                image={KiriImage} 
                                description="Kiri wa made by Apple Inc. and being used by Apple Inc" 
                            />
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default App;