import { z } from "zod";
import {
	insertProductSchema,
	insertCartSchema,
	cartItemSchema,
	shippingAddressSchema,
	insertOrderSchema,
	insertOrderItem,
} from "@/lib/validators";

export type Product = z.infer<typeof insertProductSchema> & {
	id: string;
	rating: string;
	createdAt: Date;
};

export type Cart = z.infer<typeof insertCartSchema>;
export type CartItem = z.infer<typeof cartItemSchema>;
export type ShippingAddress = z.infer<typeof shippingAddressSchema>;
export type Order = z.infer<typeof insertOrderSchema>;
export type OrderItem = z.infer<typeof insertOrderItem> & {
	id: string;
	createdAt: Date;
	isPaid: Boolean;
	paidAt: Date | null;
	isDelivered: Boolean;
	deliveredAt: Date | null;
	orderItems: OrderItem[];
	user: { name: string; email: string };
};
