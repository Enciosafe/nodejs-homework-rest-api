const { Contact } = require('./../../model')

const deleteContact = async (req, res, next) => {
  try {
    const contact = await Contact.findByIdAndDelete({ _id: req.params.contactId })
    return contact
      ? res.json({ status: 'success', code: 200, data: { contact } })
      : res.json({ status: 'error', code: 404, message: `Not found id ${req.params.contactId} !` })
  } catch (e) {
    next(e)
  }
}

module.exports = deleteContact
