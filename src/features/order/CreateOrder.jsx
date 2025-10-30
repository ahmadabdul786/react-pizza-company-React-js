import Button from "../../ui/Button";
import { useState } from "react";
import {
  Form,
  redirect,
  useActionData,
  useFormAction,
  useNavigation,
} from "react-router-dom";
import { createOrder } from "../../services/apiRestaurant";


// https://uibakery.io/regex-library/phone-number
const isValidPhone = (str) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str
  );

const fakeCart = [
  {
    pizzaId: 12,
    name: "Mediterranean",
    quantity: 2,
    unitPrice: 16,
    totalPrice: 32,
  },
  {
    pizzaId: 6,
    name: "Vegetale",
    quantity: 1,
    unitPrice: 13,
    totalPrice: 13,
  },
  {
    pizzaId: 11,
    name: "Spinach and Mushroom",
    quantity: 1,
    unitPrice: 15,
    totalPrice: 15,
  },
];

function CreateOrder() {
  const nevigation = useNavigation();
  const isSubmitting = nevigation.state === "loading";
  const formError = useActionData();
  console.log(formError);
  // const [withPriority, setWithPriority] = useState(false);
  const cart = fakeCart;

  return (
    <div>
      <h2 className="mb-8 text-xl font-semibold">Ready to order? Let's go!</h2>

      <Form method="POST">
        <div className="mb-5 flex  gap-5 sm:flex-row sm:items-center sm:justify-space ">
          <label className="sm-basis-40 white-space-nowrap sm:mr-4">First Name</label>
          <input className="input" type="text" name="customer" required />
        </div>

        <div className="mb-5 flex  gap-2 sm:flex-row sm:items-center sm:justify-space">
          <label>Phone number</label>
          <div>
            <input className="input" type="tel" name="phone" required />
          {formError?<p className="mt-2 text-xs rounded-md bg-red-100 p-1 text-red-600">{formError.phone}</p>:''}
          </div>
        </div>

        <div className="mb-5 flex  gap-5 sm:flex-row sm:items-center sm:justify-space">
          <label>Address</label>
          
            <input className="input" type="text" name="address" required />
          
        </div>

        <div className="mb-12 flex items-center gap-5">
          <input
            type="checkbox"
            name="priority"
            id="priority"
            className="h-5 w-5 transition-all duration-300 accent-yellow-400 focus:offset-2 focus:ring focus:outline-none focus:ring-yellow-300 "
           // className="focus:outline-none sm-64  focus:ring focus:ring-yellow-300 transition-all duration-500 rounded-full py-1 px-2  text-sm bg-stone-200  placeholder:text-stone-400  sm:focus:w-2xl"
            // value={withPriority}
            // onChange={(e) => setWithPriority(e.target.checked)}

          />
          <label className="font-medium" htmlFor="priority">Want to yo give your order priority?</label>
        </div>

        <div>
          {/* from here we are passing cart to our future obj */}
          <input   type="hidden" name="cart" value={JSON.stringify(cart)}
            />

          <Button  disabled={isSubmitting}>
            {isSubmitting ? `submiting...` : `Order now`}
          </Button>
        </div>
      </Form>
    </div>
  );
}
export async function action({ request }) {
  const formData = await request.formData();
  console.log(formData);
  const data = Object.fromEntries(formData);
  console.log(data);
  const order = {
    ...data,
    cart: JSON.parse(data.cart),
    priority: data.priority === "on",
  };
  const error = {};
  if (!isValidPhone(order.phone)) {
    error.phone = "please enter valid phone number";
    return error;
  }
  //sortTime(order)
  console.log(order);
  const newOrder = await createOrder(order);
  console.log(newOrder);
  return redirect(`/order/${newOrder.id}`);
}

export default CreateOrder;
