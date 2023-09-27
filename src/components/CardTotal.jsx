import React from "react";

const taxRate = 0.18;
const shipping = 25;

const CardTotal = ({subtotal}) => {
  
  let taxAmount = (taxRate * subtotal).toFixed(2);
  let aggregate = (Number(subtotal) + Number(taxAmount) + Number(shipping)).toFixed(2)
  
  return (
    <table className="table w-100 fs-4">
      <tbody>
        <tr className="text-end">
          <th className="text-start">Subtotal</th>
          <td>
            $<span className="subtotal">{subtotal}</span>
          </td>
        </tr>
        <tr className="text-end">
          <th className="text-start">Tax(18%)</th>
          <td>
            $<span className="tax">{taxAmount}</span>
          </td>
        </tr>
        <tr className="text-end">
          <th className="text-start">Shipping</th>
          <td>
            $<span className="shipping">{shipping}</span>
          </td>
        </tr>
        <tr className="text-end">
          <th className="text-start">Total</th>
          <td>
            $
            <span className="total">{aggregate}
            </span>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default CardTotal;
