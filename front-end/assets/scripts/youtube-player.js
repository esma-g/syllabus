class YouTubePlayer extends HTMLElement {
  constructor() {
    super();
    this.videoId = this.getAttribute("data-video-id");
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
     <style>
.container {border-radius: 2rem;
    overflow: hidden;
    border: 1rem inset var(--theme-color--pop);}
  .container, .thumbnail {
    width:100%;
    max-width:100%;
    aspect-ratio: 16/9;
    display:grid;
    grid-template: "thumbnail" auto / 1fr;
    place-items: center;
  }

  .thumbnail img {
    grid-area: thumbnail;
    object-fit: cover;
    max-width: 100%;
    opacity: 1;
    transition: opacity 0.2s;
  }
  .has-video .thumbnail {
    opacity: 0;
  }

  .play-button {
    cursor: pointer;
    transition: transform 0.2s;
    grid-area: thumbnail;
    font-size:72px;
    filter : drop-shadow(var(--theme-drop-shadow));
  }

  .play-button:hover, .play-button:focus {
    transform: scale(1.2);
  }
  iframe {
    grid-area: thumbnail;
    aspect-ratio: 16 / 9;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
</style>
      <div class="container">
      <div class="thumbnail">
        <img src="//i.ytimg.com/vi/${this.videoId}/maxresdefault.jpg" alt="Video thumbnail">
        <div class="play-button" role="button" title="play video">📼</div>
      </div>
      </div>
    `;

    this.shadowRoot
      .querySelector(".play-button")
      .addEventListener("click", () => {
        const iframe = document.createElement("iframe");
        iframe.setAttribute(
          "src",
          `https://www.youtube.com/embed/${this.videoId}?autoplay=1`
        );
        iframe.setAttribute("title", "Youtube Video");
        iframe.setAttribute("frameborder", "0");
        iframe.setAttribute("allowfullscreen", "");
        iframe.setAttribute(
          "allow",
          "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        );
        iframe.style.width = "560";
        iframe.style.height = "315";

        const container = this.shadowRoot.querySelector(".container");
        container.classList.add("has-video");
        container.removeChild(this.shadowRoot.querySelector(".thumbnail"));
        container.appendChild(iframe);
      });
  }
}

customElements.define("youtube-player", YouTubePlayer);
