const { getImageFolderName, saveImageAndGetURL } = require("../utils/imageHandeling");

module.exports = utils = {
    tokenGenerator: async (length) => {
        if (typeof length == "undefined")
            length = 32;
        var token = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
        for (var i = 0; i < length; i++)
            token += possible.charAt(Math.floor(Math.random() * possible.length));
        return token;
    },
    handleImage: async (id, file, type) => {
        try {
            let imageName = id + await utils.tokenGenerator(4) + '.jpg'
            let url = await getImageFolderName(type)
            let imageUrl = await saveImageAndGetURL(file, imageName, type)
            return {url, imageUrl, imageName}
        } catch (error) {
            console.log(error)
        }
    }
};