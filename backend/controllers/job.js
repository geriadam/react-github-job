const axios = require('axios');
const CustomError = require('../models/CustomError')

exports.findAll = async (req, res, next) => {
  const params = {
    full_time: true,
    page: req.query.page ?? 1
  }

  if (req.query.description) {
    params.description = req.query.description
  }

  if (req.query.location) {
    params.location = req.query.location
  }

  axios.get('http://dev3.dansmultipro.co.id/api/recruitment/positions.json', {
      params: params
    })
    .then(response => {
      return res.status(200).send({ success: true, data: response.data })
    })
    .catch(err => {
      console.log(err)
      next(new CustomError('Something went wrong', 500))
    });
}

exports.findOne = async (req, res, next) => {
  axios.get(`http://dev3.dansmultipro.co.id/api/recruitment/positions/${req.params.id}`)
    .then(response => {
      return res.status(200).send({ success: true, data: response.data })
    })
    .catch(err => {
      next(new CustomError('Something went wrong', 500))
    });
}