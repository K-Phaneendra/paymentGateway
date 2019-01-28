import Orders from './model'

export const buy = (req, res, next) => {
  console.log('body//', req.body)
  Orders.create(req.body).then(created => {
    const order = { ...req.body }
    order.ORDER_ID = created._id
    res.send({ error: false, data: created })
  })
}
