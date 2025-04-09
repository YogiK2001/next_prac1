const Page = async ({params} : {params: { id: string }}) => {
    const { id } = params;
    return (
        <div>
          Users Details Page { id }
        </div>
    );
};

export default Page;