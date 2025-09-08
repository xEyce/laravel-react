import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, Link, useForm } from '@inertiajs/react'; 
import { route } from 'ziggy-js';
import { CircleAlert } from 'lucide-react';


interface Product{
    id: number,
    name: string,
    description: string,
    price: number,
}

interface Props{
    product: Product
}

export default function Edit({product} : Props) { 

    const { data, setData, put, processing, errors} = useForm({
        'name': product.name,
        'price': product.price,
        'description': product.description
    });

    const handleUpdate= (e: React.FormEvent) => {
        e.preventDefault();
        put(route('products.update', product.id));
    }


    return (
        <AppLayout breadcrumbs={[{title: "Edit a Product", href: `/products/${product.id}/edit`}]}>
            <Head title="Update a Product" />
            <div className="p-4">
                <form onSubmit={handleUpdate} className="space-y-4">

                    {Object.keys(errors).length > 0 && (
                        <Alert >
                        <CircleAlert  />
                        <AlertTitle>Errors!</AlertTitle>
                        <AlertDescription>
                            <ul>
                                {Object.entries(errors).map(([key, message]) => (
                                    <li key={key}>{message as string}</li>
                                ))}
                            </ul>
                        </AlertDescription>
                        </Alert>
                    )}

                    <div className="gap-1.5">
                        <Label htmlFor='product_name'>Name</Label>
                        <Input placeholder='Product Name' value={data.name} onChange={(e) => setData('name', e.target.value)}></Input>
                    </div>
                    <div className="gap-1.5">
                        <Label htmlFor='product_price'>Price</Label>
                        <Input placeholder='Price' type="number" value={data.price} onChange={(e) => setData('price', Number(e.target.value))}></Input>
                    </div>
                    <div className="gap-1.5">
                        <Label htmlFor='product_description'>Description</Label>
                        <Textarea placeholder='Description' value={data.description} onChange={(e) => setData('description', e.target.value)}></Textarea>
                    </div>
                    <Button disabled={processing} type="submit">Update Product</Button>
                </form>
            </div>
        </AppLayout>
    );
}
