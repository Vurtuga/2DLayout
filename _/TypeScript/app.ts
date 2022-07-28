enum TableStates {
    Available,
    Booked,
    Occupied,
    CourseDelayed,
    ItemsReadyInKitchen,
    KDSBumpedPrinted,
    Paid,
    Cleaning
}
enum ItemTypes {
    FreeSpace,
    Table,
    Barrier,
}
enum TableShapes{
    Square,
    Rectangle,
    Circle,
    Oval,
    Triangle,
    Octagon,
    Diamond
}
type LayoutItem = {
    ItemType: ItemTypes,
    ItemWidth: number,
    ItemHeight:number,
    TableObj? :{
        TableShape: TableShapes,
        TableState: TableStates,
        TableNumber: number,
        NoOfCustomers: number,
        ReservationDateTime: Date,
        ReservationName: string,
        NoOfChairs:number,

    }    
}
function GenerateLayout(){
    console.log("Begin Generation");
    const layout : LayoutItem [][] =[
        [
            {ItemType : ItemTypes.Barrier,ItemWidth :50, ItemHeight:20},
            {ItemType : ItemTypes.Barrier,ItemWidth :50, ItemHeight:20},
            {ItemType : ItemTypes.Barrier,ItemWidth :50, ItemHeight:20}
        ]
    ];
    console.log(layout);
}