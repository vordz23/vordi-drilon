import React from 'react';

const FooterPlayer: React.FC = () => {
    return (
        <footer className="fixed bottom-0 left-0 right-0 z-50">
            <iframe
                title="Spotify Embed Player"
                data-testid="embed-iframe"
                style={{ borderRadius:'12px' }}
                src="https://open.spotify.com/embed/track/6xAIVrhyFQaHwPVWfUvWvE?utm_source=generator&theme=0"
                width="100%"
                height="152"
                frameBorder="0"
                allowFullScreen={true}
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy">
            </iframe>
        </footer>
    );
};

export default FooterPlayer;
