// Target Ids

// event listener on submit button

    //create row in table

    //add delete button to the end of each row

        //add event listener for each delete button

        //add functionality to delete row

    //add content from form to table

    //add totals row with total under the expenses collumn


    // document.addEventListener('DOMContentLoaded', () => {
    //     const form = document.getElementById('expense-form');
    //     const tableBody = document.querySelector('#expense-table tbody');
    //     const totalAmountCell = document.getElementById('total-amount');
    //     let totalAmount = 0;
    
    //     form.addEventListener('submit', (event) => {
    //         event.preventDefault();
    
    //         const expenseName = document.getElementById('expense-name').value;
    //         const expenseAmount = parseFloat(document.getElementById('expense-amount').value);
    
    //         // Create a new row
    //         const row = document.createElement('tr');
    
    //         // Create cells for expense name and amount
    //         const nameCell = document.createElement('td');
    //         nameCell.textContent = expenseName;
    //         row.appendChild(nameCell);
    
    //         const amountCell = document.createElement('td');
    //         amountCell.textContent = expenseAmount.toFixed(2);
    //         row.appendChild(amountCell);
    
    //         // Create delete button cell
    //         const deleteCell = document.createElement('td');
    //         const deleteButton = document.createElement('button');
    //         deleteButton.textContent = 'Delete';
    //         deleteButton.addEventListener('click', () => {
    //             tableBody.removeChild(row);
    //             totalAmount -= expenseAmount;
    //             totalAmountCell.textContent = totalAmount.toFixed(2);
    //         });
    //         deleteCell.appendChild(deleteButton);
    //         row.appendChild(deleteCell);
    
    //         // Add the row to the table
    //         tableBody.appendChild(row);
    
    //         // Update the total amount
    //         totalAmount += expenseAmount;
    //         totalAmountCell.textContent = totalAmount.toFixed(2);
    
    //         // Clear the form
    //         form.reset();
    //     });
    // });