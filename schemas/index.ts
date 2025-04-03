import * as z from 'zod';

export const addProductSchema = z.object({
    name: z.string().min(1, "Le nom du produit est requis et ne peut pas être vide."),
    category: z.string().min(1, "La catégorie est requise et doit être spécifiée."),
    description1: z.string().min(1, "Une description détaillée du produit est requise."),
    description2: z.string().optional(),
    // images: z.array(z.string().min(0, "Chaque image doit avoir une URL valide."))
    //            .min(1, "Au moins une image est requise pour le produit."),
    quantity: z.number().positive("La quantité doit être un nombre positif supérieur à zéro."),
    price: z.number().positive("Le prix doit être un montant positif supérieur à zéro."),
    promoPrice: z.number().optional(),
    brand: z.string().min(1, "La marque du produit est obligatoire."),
    // tags: z.array(z.string()).optional(),
});
