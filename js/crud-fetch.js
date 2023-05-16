// const url ='https://6459d8a965bd868e9309e410.mockapi.io/api/test/data1';
// var table = document.getElementById('table-data');
// fetch(url)
//     .then(res => res.json())
//     .then(data => {
//         data.forEach(todo => {
//             var row = table.insertRow(-1);
//             var cell1 = row.insertCell(0);
//             var cell2 = row.insertCell(1);
//             var cell3 = row.insertCell(2);
//             var cell4 = row.insertCell(3);
            
//             cell1.innerHTML = todo.id;
//             cell2.innerHTML = '<img src="' + todo.avatar + '" width="200"/>';
//             cell3.innerHTML = todo.name;
//             cell4.innerHTML = `<button class="btn btn-danger btn-sm" onclick="deleteData(${todo.id})">Delete</button>
//             < class="btn btn-success btn-sm" onclick="editData(${todo.id})">Edit</button>
//             < class="btn btn-primary btn-sm" onclick="addData()">Add</button>`;
//         });
//     })

function showModal(title, name, avatar, onSave) {
    const modal = $('#exampleModal');
    modal.find('.modal-title').text(title);
    modal.find('#inputName').val(name);
    modal.find('#inputAvatar').val(avatar);
    modal.find('#saveData').off('click').on('click', onSave);
    modal.modal('show');
}
const url ='https://6459d8a965bd868e9309e410.mockapi.io/api/test/data1';
var table = document.getElementById('table-data');
fetch(url)
    .then(res => res.json())
    .then(data => {
        data.forEach(todo => {
            var row = table.insertRow(-1);
            var cell1 = row.insertCell(0);
            var cell2 = row.insertCell(1);
            var cell3 = row.insertCell(2);
            var cell4 = row.insertCell(3);
            
            cell1.innerHTML = todo.id;
            cell2.innerHTML = '<img src="' + todo.avatar + '" width="200"/>';
            cell3.innerHTML = todo.name;
            cell4.innerHTML =`
                <button class="btn btn-danger btn-sm" onclick="deleteData(${todo.id})">Delete</button>
                <button class="btn btn-success btn-sm" onclick="editData(${todo.id})">Edit</button>
                <button class="btn btn-primary btn-sm" onclick="addData()">Add</button>
            `;
        });
    })
    function deleteData(id) {
        fetch(url + `/${id}`, {
            method: 'DELETE'
        })
        .then(() => {
            alert('Deleted successfully');
            location.reload();
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    }
    // function editData(id) {
    //     const newName = prompt('Enter new name:');
    //     if (newName) {
    //         const data = {
    //             name: newName
    //         };
    //         fetch(url + `/${id}`, {
    //             method: 'PUT',
    //             headers: {
    //                 'Content-Type': 'application/json'
    //             },
    //             body: JSON.stringify(data)
    //         })
    //         .then(() => {
    //             alert('Updated successfully');
    //             location.reload();
    //         })
    //         .catch((error) => {
    //             console.error('Error:', error);
    //         });
    //     }
    // }
    // function addData() {
    //     const name = prompt('Enter name:');
    //     const avatar = prompt('Enter image URL:');
    //     if (name && avatar) {
    //         const data = {
    //             name: name,
    //             avatar: avatar
    //         };
    //         fetch(url, {
    //             method: 'POST',
    //             headers: {
    //                 'Content-Type': 'application/json'
    //             },
    //             body: JSON.stringify(data)
    //         })
    //         .then(() => {
    //             alert('Added successfully');
    //             location.reload();
    //         })
    //         .catch((error) => {
    //             console.error('Error:', error);
    //         });
    //     }
    // }


    // function addData() {
    //     showModal('Add Data', '', '', () => {
    //         const name = $('#inputName').val();
    //         const avatar = $('#inputAvatar').val();
    //         if (name && avatar) {
    //             const data = {
    //                 name: name,
    //                 avatar: avatar
    //             };
    //             fetch(url, {
    //                 method: 'POST',
    //                 headers: {
    //                     'Content-Type': 'application/json'
    //                 },
    //                 body: JSON.stringify(data)
    //             })
    //             .then(() => {
    //                 alert('Added successfully');
    //                 location.reload();
    //             })
    //             .catch((error) => {
    //                 console.error('Error:', error);
    //             });
    //         }
    //     });
    // }
    // function editData(id) {
    //     fetch(url + `/${id}`)
    //         .then(res => res.json())
    //         .then(todo => {
    //             showModal('Edit Data', todo.name, todo.avatar, () => {
    //                 const newName = $('#Name').val();
    //                 const newAvatar = $('#inputAvatar').val();
    //                 if (newName && newAvatar) {
    //                     const data = {
    //                         name: newName,
    //                         avatar: newAvatar
    //                     };
    //                     fetch(url + `/${id}`, {
    //                         method: 'PUT',
    //                         headers: {
    //                             'Content-Type': 'application/json'
    //                         },
    //                         body: JSON.stringify(data)
    //                     })
    //                     .then(() => {
    //                         alert('Updated successfully');
    //                         location.reload();
    //                     })
    //                     .catch((error) => {
    //                         console.error('Error:', error);
    //                     });
    //                 }
    //             });
    //         })
    //         .catch((error) => {
    //             console.error('Error:', error);
    //         });
    // }


    function editData(id) {
        const url = 'https://6459d8a965bd868e9309e410.mockapi.io/api/test/data1';
        fetch(`${url}/${id}`)
            .then(res => res.json())
            .then(data => {
                showModal('Edit Data', data.name, data.avatar, () => {
                    const name = $('#inputName').val();
                    const avatar = $('#inputAvatar').val();
                    const data = {name, avatar};
                    fetch(`${url}/${id}`, {
                        method: 'PUT',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(data)
                    })
                        .then(() => {
                            alert('Updated successfully');
                            location.reload();
                        })
                        .catch((error) => {
                            console.error('Error:', error);
                        });
                });
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }
    function addData() {
        const url = 'https://6459d8a965bd868e9309e410.mockapi.io/api/test/data1';
        showModal('Add Data', '', '', () => {
            const name = $('#inputName').val();
            const avatar = $('#inputAvatar').val();
            const data = {name, avatar};
            fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
                .then(() => {
                    alert('Added successfully');
                    location.reload();
                })
                .catch((error) => {
                    console.error('Error:', error);
                });
        });
    }
