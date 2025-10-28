"use client";
import React, { useEffect, useState } from "react";
import "./ServicesCards.css";
import { FaArrowRightLong } from "react-icons/fa6";
import truncateTextByWords from "@/utils/TruncateByWords";
import {
  Stack,
  Pagination,
  Select,
  MenuItem,
  Typography,
  PaginationItem,
} from "@mui/material";
import { BiFirstPage, BiLastPage } from "react-icons/bi";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { fetchAllProducts } from "@/DAL/Fetch";
import { useRouter } from "next/navigation";
import ServicesSkeleton from "../SkeletonLoaders/ServicesSkeleton";
import { baseUrl } from "@/config/Config";

const ServicesCards = () => {
  const router = useRouter();

  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(12);
  const [totalItems, setTotalItems] = useState(0);
  const [totalPages, setTotalPages] = useState(0);

  // fetch data
  useEffect(() => {
    const loadServices = async () => {
      try {
        setLoading(true); // 👈 start loading
        const res = await fetchAllProducts(page, rowsPerPage, "");
        setServices(res?.products || []);
        setTotalItems(res?.totalProducts || 0);
        setTotalPages(res?.totalPages || 0);
      } catch (error) {
        console.error("Error fetching services:", error);
      } finally {
        setLoading(false); // 👈 stop loading
      }
    };
    loadServices();
  }, [page, rowsPerPage]);

  const start = (page - 1) * rowsPerPage + 1;
  const end = Math.min(start + rowsPerPage - 1, totalItems);

  const handleChangePage = (e, newPage) => {
    setPage(newPage);
  };

  return (
    <div className="services-cards">
      <h2>
        Carter Oil <span>Products & Services</span>
      </h2>

      {loading ? (
        <ServicesSkeleton count={rowsPerPage} />
      ) : (
        <>
          <div className="services-cards-grid">
            {services.map((service) => (
              <React.Fragment key={service._id}>
                <div className="service-card">
                  <div className="icon-container">
                    <img src={baseUrl + service.icon} className="service-icon" />
                  </div>
                  <h3>{service.title}</h3>
                  <p>{truncateTextByWords(service.short_description, 25)}</p>
                  <span
                    onClick={() => {
                      router.push(`/products/${service.slug}`);
                    }}
                  >
                    Learn More <FaArrowRightLong />
                  </span>
                </div>

                {/* <span className="small-line"></span> */}
              </React.Fragment>
            ))}
          </div>
          {/* Pagination Section */}
          {totalItems > 0 && (
            <Stack
              direction={{ xs: "column", sm: "row" }} // column on mobile, row on desktop
              spacing={2}
              alignItems="center"
              justifyContent="space-between"
              sx={{
                mt: 3,
                width: { xs: "100%", sm: "90%" }, //  100% on mobile, 80% on desktop
                mx: "auto", // center horizontally
              }}
            >
              {/* Range Text */}
              <Typography>
                {start}-{end} of {totalItems} items
              </Typography>

              {/* Pagination */}
              <Pagination
                count={totalPages}
                page={page}
                onChange={handleChangePage}
                siblingCount={1}
                boundaryCount={0}
                shape="rounded"
                renderItem={(item) => (
                  <PaginationItem
                    slots={{
                      first: BiFirstPage,
                      previous: MdChevronLeft,
                      next: MdChevronRight,
                      last: BiLastPage,
                    }}
                    {...item}
                  />
                )}
                sx={{
                  "& .MuiPaginationItem-root": {
                    borderRadius: "6px",
                  },
                  "& .MuiPaginationItem-root.Mui-selected": {
                    backgroundColor: "var(--primary-color)",
                    color: "#fff",
                  },
                  "& .MuiPaginationItem-root.MuiPaginationItem-previousNext, & .MuiPaginationItem-root.MuiPaginationItem-firstLast":
                  {
                    backgroundColor: "var(--primary-color)",
                    color: "#fff",
                    "&:hover": {
                      backgroundColor: "#ec9615ff",
                    },
                  },
                }}
              />

              {/* Items per page selector (hidden on mobile) */}
              <Stack
                direction="row"
                alignItems="center"
                spacing={1}
                sx={{ display: { xs: "none", sm: "flex" } }} // hide on mobile
              >
                <Select
                  size="small"
                  value={rowsPerPage}
                  onChange={(e) => {
                    setRowsPerPage(e.target.value);
                    setPage(1);
                  }}
                  sx={{ minWidth: 60 }}
                >
                  {[6, 12, 24, 48].map((num) => (
                    <MenuItem key={num} value={num}>
                      {num}
                    </MenuItem>
                  ))}
                </Select>
                <Typography>Items per page</Typography>
              </Stack>
            </Stack>
          )}
        </>
      )}
    </div>
  );
};

export default ServicesCards;
