import './App.css'
import React from "react";
import {Unity, useUnityContext} from "react-unity-webgl"
import {DiscordSDK} from '@discord/embedded-app-sdk';
const discordSdk = new DiscordSDK("1384658377078079628");

function App() {
    const { unityProvider, isLoaded, loadingProgression } = useUnityContext({
        loaderUrl: "https://pub-0511df83aa9543e5b80de99ec54a3383.r2.dev/Build/ToDiscord.loader.js",
        dataUrl: "https://pub-0511df83aa9543e5b80de99ec54a3383.r2.dev/Build/ToDiscord.data",
        frameworkUrl: "https://pub-0511df83aa9543e5b80de99ec54a3383.r2.dev/Build/ToDiscord.framework.js",
        codeUrl: "https://pub-0511df83aa9543e5b80de99ec54a3383.r2.dev/Build/ToDiscord.wasm",
    });
    setupDiscordSdk().then(() => {
        console.log("Discord SDK is ready");
    });
    const loadingPercentage = Math.round(loadingProgression * 100);
    //return <Unity unityProvider={unityProvider} style={{ width: 960, height: 540 }}/>;

    return (
    <div className="container">
        {isLoaded === false && (
            // We'll conditionally render the loading overlay if the Unity
            // Application is not loaded.
            <div className="loading-overlay">
                <p>Loading... ({loadingPercentage}%)</p>
            </div>
        )}
        <Unity className="unity" unityProvider={unityProvider} style={{width: 960, height: 540}}/>
    </div>
)
    ;
}

async function setupDiscordSdk() {
    await discordSdk.ready()
}

export default App
