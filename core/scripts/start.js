window.onload = Start;

//System
var file_system;
var tr; // for testing only
var cxtm; // context menu
// App Manager
var app_mng;
// windows
var wins = [];
var iter = 0;
var split_id_toolbar = 0;
// Z-index
var min_z = 10;
var max_z = 200;
var z_index = min_z;

function Start() {
        //Disable default context menu of browser
        $(document).bind("contextmenu",function(e){
            return false;
        });

        // Creating Systems
        file_system = new FileSystem("R:");
        cxtm = new ContextMenu();
        app_mng = new AppManager();
        
        tr = new DirFollower(file_system); // ONLY FOR TESTS

        basicFiles();
        setApps();

        app_mng.callApp(APPS_MANAGER_APP);
}

function setApps() {
    app_mng.addApp(NOTEBOOK_APP, "color: #0ff;", "icon-app-notebook", "Win_Notebook", "txt");
    app_mng.addApp(EXPLORER_APP, "icon-folder-open", "color: #f7c96c;", "Win_Explorer", undefined, undefined, undefined, 300, 200);
    app_mng.addApp(APPS_MANAGER_APP, "icon-app-apps-manager", "color: #ff2c2c", "Win_AppManager");
}

function basicFiles() {
    file_system.root_folder.getByName("Desktop").pushBinder(new File("Testero.txt"));
    file_system.root_folder.getByName("Documents").pushBinder(new File("Testero.txt"));
    file_system.root_folder.getByName("Documents").pushBinder(new File("be_be.fun"));
    file_system.root_folder.getByName("Documents").pushBinder(new Folder("xampp"));
    file_system.root_folder.getByName("Documents").pushBinder(new Folder("bin"));
    file_system.root_folder.getByName("Documents").pushBinder(new Folder("user"));
    file_system.root_folder.getByName("Documents").getByName("xampp").pushBinder(new File("htdocs.xml"));
    file_system.root_folder.getByName("Documents").getByName("bin").pushBinder(new File("Elo.uwu"));
    file_system.root_folder.getByName("Documents").getByName("bin").pushBinder(new File("Wdxt"));
    file_system.root_folder.getByName("Documents").getByName("bin").pushBinder(new Folder("hot"));
    file_system.root_folder.getByName("Documents").getByName("bin").getByName("hot").pushBinder(new File("Nie dla psa kielbasa"));
       
    for (let i = 0; i < 20; i++) {
        file_system.root_folder.getByName("Documents").pushBinder(new Folder("Lorem ipsum"));
    }

    //file_system.printHierarchyTree();
}