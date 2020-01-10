import { Entry } from './pages/entries/shared/entry.model';
import { InMemoryDbService } from "angular-in-memory-web-api";
import { Category } from './pages/categories/shared/category.model';



export class InMemoryDataBase implements InMemoryDbService {
    createDb(){
        const categories: Category[] = [
            { id: 1, name: 'Pagamento', description: 'Pagamentos de Contas da Casa' },
            { id: 2, name: 'Saúde', description: 'Plano de Saúde e Remédios' },
            { id: 3, name: 'Lazer', description: 'Cinema, parques, praia, etc' },
            { id: 4, name: 'Salário', description: 'Recebimento de Salário' },
            { id: 5, name: 'Freelas', description: 'Trabalhos como freelancer' }
            
        ];

        const entries: Entry[] = [
            { id: 1, name: 'Spotify', categoryId: categories[0].id, category: categories[0], paid: true, date: "10/01/2020", amount: "16,90", type: "expense", description: "" } as Entry,
            { id: 2, name: 'Curso de Java', categoryId: categories[1].id, category: categories[1], paid: true, date: "06/01/2020", amount: "645,00", type: "expense" } as Entry,
            { id: 3, name: 'Cartão de crédito Santander', categoryId: categories[3].id, category: categories[3], paid: true, date: "11/01/2020", amount: "88,00", type: "revenue" } as Entry,
            { id: 4, name: 'Netflix', categoryId: categories[2].id, category: categories[2], paid: true, date: "08/01/2020", amount: "16,00", type: "expense" } as Entry,
            { id: 5, name: 'Suplementos', categoryId: categories[1].id, category: categories[1], paid: true, date: "17/10/2018", amount: "30,00", type: "expense" } as Entry,
            { id: 6, name: 'Video Game da Filha', categoryId: categories[2].id, category: categories[2], paid: true, date: "17/10/2018", amount: "15,00", type: "expense" } as Entry,
            { id: 11, name: 'Uber', categoryId: categories[1].id, category: categories[1], paid: true, date: "17/10/2018", amount: "30,00", type: "expense" } as Entry
            
        ]

        return { categories, entries }
        
    }
}