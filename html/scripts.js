const refreshfeatures = (features) => {
    let featuresContent = "";

    for (let position = 0; position < featuresContent.count(); position++) {
        let features = cardFeature.get(position);
        featuresContent += `<div class="card">
                                <button class="card__delete" type="button" onclick="removeCard(event, ${position})">
                                    <i class="fas fa-times-circle" aria-hidden="true"></i>
                                </button>
                                <img class="card__image" src="${XXXXX.image}" alt="" />
                                <p class="card__text">${XXXXX.text}</p>
                                <span class="card__text">${XXXXX.user}</span>
                            </div>`;
    }
    features.innerHTML = featuresContent;
}

const cardFeatures = document.getElementsByClassName("features")[0];

function watchFeaturesContent() {
    refreshFeatures(featuresContent);
}

const featuresContent = {
    internalList: [],
    watcher: watchFeaturesContent,
    add(card) {
        this.internalList.push(card);
        this.watcher();
    },
    remove(position) {
        this.internalList.splice(position, 1);
        this.watcher();
    }
}

export default listaNotas;