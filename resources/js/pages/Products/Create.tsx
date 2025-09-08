import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, Link } from '@inertiajs/react'; 

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Create new Product',
        href: '/products/create',
    },
];

export default function Index() { 

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Create new Product" />
            <div className="m-4">
                <form action="">
                    <div className="gap-1.5">
                        <Label htmlFor='product_name'>Name</Label>
                        <Input placeholder='Product Name'></Input>
                    </div>
                    <div className="gap-1.5">
                        <Label htmlFor='product_price'>Price</Label>
                        <Input placeholder='Price'></Input>
                    </div>
                    <div className="gap-1.5">
                        <Label htmlFor='product_description'>Description</Label>
                        <Input placeholder='Description'></Input>
                    </div>
                </form>
            </div>
        </AppLayout>
    );
}
