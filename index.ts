import {PrismaClient} from "@prisma/client"

const prisma = new PrismaClient();

async function main() {

    // Create data
    // const author = await prisma.author.create({
    //     data:{
    //         name:"Robert",
    //         email:"robert@email.com"
    //     },
    // });
    // console.log(author);

    // Get All Data
    // const authors = await prisma.author.findMany();
    // console.log(authors);





    // create book associate or refrence with auther
    // const book  = await prisma.books.create({
    //     data:{
    //         title: "RDPD",
    //         price: 350,
    //         author: {
    //             connect:{
    //                 id: 1,
    //             }
    //         }
    //     },
    // });
    // console.log(book);



    // Create author and books and associate both
    // const author = await prisma.author.create({
    //     data:{
    //         name: "Peter Thile",
    //         email: "peter@gmail.com",
    //         book: {
    //             create:{
    //                 title: "0 to 1",
    //             }
    //         }
    //     },
    // });
    // console.log(author);
    




    // Get ALL combined data
    // const users = await prisma.author.findMany({
    //     include: {
    //         book: true,
    //     },
    // });
    // // console.log(users);
    // users.forEach((user)=>{
    //     console.log(`ID: ${user.id}, name: ${user.name}, email: ${user.email}, mob_no: ${user.mob_number}`),
    //     console.log("Book Written --")
    //     user.book.forEach((bk)=>{
    //         console.log(`ID: ${bk.id},title: ${bk.title},price: ${bk.price}`);
    //     })
    //     console.log("\n");
    // })



    // Update data in Table
    // const author = await prisma.author.update({
    //     where: {
    //         id: 1,
    //     },
    //     data: {
    //         name: "Robert kiyosaki",
    //     },
    // });

    // console.log(author);


    // Delete in Table
    // const book = await prisma.books.delete({
    //     where:{
    //         id: 2,
    //     }
    // });
    // console.log(book);



}

main()
.then( async ()=> {
    await prisma.$disconnect(); // Disconnect after completing the main function
})
.catch( async (err)=>{
    console.error(err);
    await prisma.$disconnect();
    process.exitCode = 1;
} )