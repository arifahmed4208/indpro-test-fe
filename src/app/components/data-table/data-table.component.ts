import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Repos } from 'src/app/Interfaces/Repos';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})

export class DataTableComponent implements OnInit {

  displayedColumns: string[] = ['name', 'description', 'stars'];
  dataSource!: MatTableDataSource<Repos>;

  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort!: MatSort;

  constructor(private http: HttpService) {}

  ngOnInit() {
    // Fetch data and initialize the table
    this.http.fetchData().subscribe(
      (data: Repos[]) => {
        const transformedData = data.map(repo => ({
          ...repo,
          description: repo.description || 'unavailable'
        }));
        this.dataSource = new MatTableDataSource(transformedData);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        this.setUpFilter();
      },
      (error) => console.error('Error fetching data:', error)
    );
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  setUpFilter() {
    this.dataSource.filterPredicate = (data: Repos, filter: string): boolean => {
      const transformedFilter = filter.trim().toLowerCase();
      return (
        data.name.toLowerCase().includes(transformedFilter) ||
        (data.description?.toLowerCase() || '').includes(transformedFilter) ||
        data.stargazers_count.toString().includes(transformedFilter)
      );
    };
  }

}
