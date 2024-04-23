const ContactUs = require("../models/contactus.model");

module.exports = contactusController = {
  addContactusMessage: async (request, response) => {
    try {
      let newContactus = new ContactUs({
        ...request.body,
      });

      let createdContactus = await newContactus.save();
      if (!createdContactus)
        return response.json({
          success: false,
          error: "Feedback not getting save",
        });

      return response.json({ success: true, user: createdContactus });
    } catch (error) {
      console.log(error);
      return response.json({ success: false, error });
    }
  },
};
